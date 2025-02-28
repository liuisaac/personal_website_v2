const spawnPoints = (PARTICLE_COUNT) => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3;
        pos[idx] = (Math.random() - 0.5) * 0.4;
        pos[idx + 1] = (Math.random() - 0.5) * 0.4;
        pos[idx + 2] = (Math.random() - 0.5) * 0.4;

        let vx = 0;
        let vy = 0;
        let vz = 0;

        vel[idx] = vx;
        vel[idx + 1] = vy;
        vel[idx + 2] = vz;
    }

    return { positions: pos, velocities: vel };
};

export default spawnPoints;