import React, { useEffect, useRef, useCallback } from 'react';

const InteractiveDotBackground = ({
    dotSpacing = 30,
    baseOpacityMin = 0.3,
    baseOpacityMax = 0.6,
    baseRadius = 1.5,
    interactionRadius = 250,
    opacityBoost = 1.2,
    radiusBoost = 4,
    dotColor = { r: 87, g: 220, b: 205 }, // Teal/Cyan matching your neon buttons
    className = "",
    gradientOverlay = true
}) => {
    const canvasRef = useRef(null);
    const animationFrameId = useRef(null);
    const dotsRef = useRef([]);
    const gridRef = useRef({});
    const canvasSizeRef = useRef({ width: 0, height: 0 });
    const mousePositionRef = useRef({ x: null, y: null });

    const INTERACTION_RADIUS_SQ = interactionRadius * interactionRadius;
    const GRID_CELL_SIZE = Math.max(50, Math.floor(interactionRadius / 1.5));

    const handleMouseMove = useCallback((event) => {
        const canvas = canvasRef.current;
        if (!canvas) {
            mousePositionRef.current = { x: null, y: null };
            return;
        }
        const rect = canvas.getBoundingClientRect();
        const canvasX = event.clientX - rect.left;
        const canvasY = event.clientY - rect.top;
        mousePositionRef.current = { x: canvasX, y: canvasY };
    }, []);

    const createDots = useCallback(() => {
        const { width, height } = canvasSizeRef.current;
        if (width === 0 || height === 0) return;

        const newDots = [];
        const newGrid = {};
        const cols = Math.ceil(width / dotSpacing);
        const rows = Math.ceil(height / dotSpacing);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = i * dotSpacing + dotSpacing / 2;
                const y = j * dotSpacing + dotSpacing / 2;
                const cellX = Math.floor(x / GRID_CELL_SIZE);
                const cellY = Math.floor(y / GRID_CELL_SIZE);
                const cellKey = `${cellX}_${cellY}`;

                if (!newGrid[cellKey]) {
                    newGrid[cellKey] = [];
                }

                const dotIndex = newDots.length;
                newGrid[cellKey].push(dotIndex);

                const baseOpacity = Math.random() * (baseOpacityMax - baseOpacityMin) + baseOpacityMin;
                newDots.push({
                    x,
                    y,
                    baseColor: `rgba(${dotColor.r}, ${dotColor.g}, ${dotColor.b}, ${baseOpacityMax})`,
                    targetOpacity: baseOpacity,
                    currentOpacity: baseOpacity,
                    opacitySpeed: (Math.random() * 0.005) + 0.002,
                    baseRadius: baseRadius,
                    currentRadius: baseRadius,
                });
            }
        }
        dotsRef.current = newDots;
        gridRef.current = newGrid;
    }, [dotSpacing, GRID_CELL_SIZE, baseOpacityMin, baseOpacityMax, baseRadius, dotColor]);

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const container = window; // Using window since it's full screen
        const width = container.innerWidth;
        const height = container.innerHeight;

        if (canvas.width !== width || canvas.height !== height ||
            canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height)
        {
            canvas.width = width;
            canvas.height = height;
            canvasSizeRef.current = { width, height };
            createDots();
        }
    }, [createDots]);

    const animateDots = useCallback(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const dots = dotsRef.current;
        const grid = gridRef.current;
        const { width, height } = canvasSizeRef.current;
        const { x: mouseX, y: mouseY } = mousePositionRef.current;

        if (!ctx || !dots || !grid || width === 0 || height === 0) {
            animationFrameId.current = requestAnimationFrame(animateDots);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        const activeDotIndices = new Set();
        if (mouseX !== null && mouseY !== null) {
            const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE);
            const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE);
            const searchRadius = Math.ceil(interactionRadius / GRID_CELL_SIZE);
            for (let i = -searchRadius; i <= searchRadius; i++) {
                for (let j = -searchRadius; j <= searchRadius; j++) {
                    const checkCellX = mouseCellX + i;
                    const checkCellY = mouseCellY + j;
                    const cellKey = `${checkCellX}_${checkCellY}`;
                    if (grid[cellKey]) {
                        grid[cellKey].forEach(dotIndex => activeDotIndices.add(dotIndex));
                    }
                }
            }
        }

        dots.forEach((dot, index) => {
            dot.currentOpacity += dot.opacitySpeed;
            if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= baseOpacityMin) {
                dot.opacitySpeed = -dot.opacitySpeed;
                dot.currentOpacity = Math.max(baseOpacityMin, Math.min(dot.currentOpacity, baseOpacityMax));
                dot.targetOpacity = Math.random() * (baseOpacityMax - baseOpacityMin) + baseOpacityMin;
            }

            let interactionFactor = 0;
            dot.currentRadius = dot.baseRadius;

            if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
                const dx = dot.x - mouseX;
                const dy = dot.y - mouseY;
                const distSq = dx * dx + dy * dy;

                if (distSq < INTERACTION_RADIUS_SQ) {
                    const distance = Math.sqrt(distSq);
                    interactionFactor = Math.max(0, 1 - distance / interactionRadius);
                    interactionFactor = interactionFactor * interactionFactor;
                }
            }

            const finalOpacity = Math.min(1, dot.currentOpacity + interactionFactor * opacityBoost);
            dot.currentRadius = dot.baseRadius + interactionFactor * radiusBoost;

            ctx.beginPath();
            ctx.fillStyle = `rgba(${dotColor.r}, ${dotColor.g}, ${dotColor.b}, ${finalOpacity.toFixed(3)})`;
            ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2);
            ctx.fill();
        });

        animationFrameId.current = requestAnimationFrame(animateDots);
    }, [GRID_CELL_SIZE, interactionRadius, INTERACTION_RADIUS_SQ, opacityBoost, radiusBoost, baseOpacityMin, baseOpacityMax, dotColor]);

    useEffect(() => {
        handleResize();
        const handleMouseLeave = () => {
            mousePositionRef.current = { x: null, y: null };
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('resize', handleResize);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        animationFrameId.current = requestAnimationFrame(animateDots);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [handleResize, handleMouseMove, animateDots]);

    return (
        <div className="fixed inset-0 z-0 bg-[#0d0a07]">
            <canvas 
                ref={canvasRef} 
                className={`absolute inset-0 z-0 pointer-events-none ${className}`}
            />
            {gradientOverlay && (
                <div 
                    className="absolute inset-0 z-1 pointer-events-none" 
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, #0d0a07 90%), radial-gradient(ellipse at center, transparent 40%, #0d0a07 95%)'
                    }}
                />
            )}
        </div>
    );
};

export default InteractiveDotBackground;
