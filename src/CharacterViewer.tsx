import {Suspense, useMemo} from 'react'
import {Canvas, useLoader} from '@react-three/fiber'
import {OrbitControls, Float} from "@react-three/drei"
import {STLLoader} from "three/examples/jsm/loaders/STLLoader.js";
import {mergeVertices, mergeGeometries} from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import {RingGeometry} from "three";
import HolographicMaterial from './HolographicMaterial.jsx'

const characterPos: [number, number, number] = [
    -80,    // x
    -25,      // y
    0,      // z
];

const characterRot: [number, number, number] = [
    -Math.PI / 2,    // x
    0,
    0
];

function CharacterModel() {
    const rawGeometry = useLoader(
        STLLoader,
        "../public/elf_archer_sb.stl"
    );
    const geometry = useMemo(() => {
        let geo = rawGeometry.clone()
        geo.deleteAttribute('normal')
        geo = mergeVertices(geo, 1e-3)
        geo.computeVertexNormals()
        return geo;
    }, [rawGeometry]);
    return (
        <group
            position={characterPos}
           >
            <Float
                rotationIntensity={0.08}
                floatIntensity={10}
                speed={2}
                floatingRange={[-0.1, 0.1]}>
                <mesh 
                    geometry={geometry}
                    rotation={characterRot}>
                    <HolographicMaterial
                        frenselAmount={0.5}
                        frenselOpacity={0.52}
                        scanlineSize={11.8}
                        hologramBrightness={1.3}
                        signalSpeed={0.56}
                        hologramColor={"#7bc2f5"}
                        hologramOpacity={0.72}
                        enableBlinking={false}
                    />
                </mesh>
            </Float>
        </group>
    );
}

function Platform() {
    // create shapes for the rings
    const outerRing = new RingGeometry(22, 22.5, 30);
    const innerRing = new RingGeometry(15, 15.5, 30);

    const glowRings = mergeGeometries([outerRing, innerRing]);

    return (
        <group
            position={[characterPos[0], characterPos[1] - 5, characterPos[2]]}
            rotation={characterRot}
        >
            <mesh
                geometry={glowRings}>
                <HolographicMaterial
                    frenselAmount={0.5}
                    frenselOpacity={0.52}
                    scanlineSize={0}
                    hologramBrightness={3}
                    signalSpeed={0}
                    hologramColor={"#7bc2f5"}
                    hologramOpacity={0.72}
                    enableBlinking={false}
                />
            </mesh>
        </group>
    );
}

export default function CharacterViewer() {
    return (
        <>
            <Canvas>
                {/*<ambientLight intensity={0.7} />*/}
                {/*<pointLight position={[characterPos[0]+3, characterPos[1]+32, characterPos[2]-9]} intensity={100} />*/}
                <OrbitControls
                    enableZoom={false}
                    autoRotate={true}
                    autoRotateSpeed={0.6}
                    enableDamping={true}
                    target={characterPos}
                />
                <Suspense fallback={null}>
                    <CharacterModel/>
                    <Platform/>
                </Suspense>
            </Canvas>
        </>
    )
}