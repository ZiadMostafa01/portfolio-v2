import React, { useMemo } from 'react';

// 1. طلعنا منطق الحسابات بره الكومبوننت تماماً عشان React ميزعلش من الـ Purity
const generateParticles = (count, minDur, maxDur) => {
    const icons = ['{', '}', '<', '>', '[', ']', '/', '&', '|', '*', '&&', '||', '!=', '=>', '()'];
    
    return Array.from({ length: count }).map((_, i) => {
        const isFalling = Math.random() > 0.5;
        return {
            id: i,
            icon: icons[Math.floor(Math.random() * icons.length)],
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * -20}s`,
            duration: `${minDur + Math.random() * (maxDur - minDur)}s`,
            size: `${14 + Math.random() * 12}px`,
            animationClass: isFalling ? 'animate-particle-fall' : 'animate-particle-rise',
            initialTop: isFalling ? '-10%' : '110%'
        };
    });
};

const Particles = () => {
    const minDuration = 5;
    const maxDuration = 10;
    const count = 30; // قللنا العدد زي ما طلبت

    // 2. بنستدعي الدالة جوه useMemo وهي هتتنفذ مرة واحدة بس
    const particlesData = useMemo(() => {
        return generateParticles(count, minDuration, maxDuration);
    }, []); // المصفوفة الفاضية دي بتضمن إن الـ Math.random ميتكررش

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particlesData.map((p) => (
                <span 
                    key={p.id}
                    className={`absolute font-code text-[var(--primary)]/70 whitespace-nowrap ${p.animationClass}`}
                    style={{
                        left: p.left,
                        top: p.initialTop,
                        fontSize: p.size,
                        animationDuration: p.duration,
                        animationDelay: p.delay,
                    }}
                >
                    {p.icon}
                </span>
            ))}
        </div>
    );
};

export default Particles;