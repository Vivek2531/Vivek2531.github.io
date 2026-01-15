import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const StarField = () => {
    const ref = useRef<THREE.Group>(null);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const Background3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: -1,
            background: '#09090b' // Fallback/Base color
        }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <StarField />
            </Canvas>
        </div>
    );
};

export default Background3D;
