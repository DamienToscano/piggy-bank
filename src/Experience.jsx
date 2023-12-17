import { Stage, OrbitControls, RoundedBox, useGLTF, PresentationControls } from "@react-three/drei";
import { InstancedRigidBodies, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useMemo } from "react";

export default function Experience() {

    return <>
        {/* <Perf position="top-left" /> */}

        {/* <OrbitControls makeDefault /> */}

        <color attach="background" args={["#7B9FB9"]} />

        <PresentationControls
            snap={{ mass: 4, tension: 600 }}
            rotation={[0, 0.3, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            global={true}
        >
            <Stage
                adjustCamera={1.5}
                shadows={false}
                environment={"sunset"}
            >
                <Physics>
                    <Coins />
                    <PiggyBank />
                    <Floor />
                </Physics>
            </Stage>
        </PresentationControls>
    </>
}

function Floor() {
    const floorColor = "#7B9FB9";

    return <>
        <RigidBody type="fixed">
            <RoundedBox
                args={[7, 1.5, 7]}
                radius={0.10}
                position-y={0.7}
            >
                <meshStandardMaterial color={floorColor} roughness={0} envMapIntensity={0.75} />
            </RoundedBox>
            <RoundedBox
                args={[10, 0.5, 10]}
                radius={0.10}
            >
                <meshStandardMaterial color={floorColor} roughness={0} envMapIntensity={0.75} />
            </RoundedBox>
        </RigidBody>
    </>
}

function PiggyBank() {
    const piggyBank = useGLTF("./piggy.glb");

    return <>
        <RigidBody
            type="fixed"
            colliders="hull"
        >
            <primitive object={piggyBank.scene}
                position-y={3.2}
                rotation-y={- Math.PI / 2}
            />
        </RigidBody>
    </>
}

function Coins() {
    const count = 250
    const vertical_offset = 0.2
    const vertical_gap = 0.12

    const instances = useMemo(() => {
        const instances = []

        /* We can now fill the instances array by pushing an object inside for each cube we want. */
        for (let i = 0; i < 10; i++) {
            instances.push({
                key: 'instance_1_' + i,
                position:
                    [
                        -3,
                        i * vertical_gap + vertical_offset,
                        4.25
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 5; i++) {
            instances.push({
                key: 'instance_2_' + i,
                position:
                    [
                        -1,
                        i * vertical_gap + vertical_offset,
                        4.25
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 9; i++) {
            instances.push({
                key: 'instance_3_' + i,
                position:
                    [
                        1,
                        i * vertical_gap + vertical_offset,
                        4.25
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 6; i++) {
            instances.push({
                key: 'instance_4_' + i,
                position:
                    [
                        3,
                        i * vertical_gap + vertical_offset,
                        4.25
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 3; i++) {
            instances.push({
                key: 'instance_5_' + i,
                position:
                    [
                        4.25,
                        i * vertical_gap + vertical_offset,
                        4.25
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 7; i++) {
            instances.push({
                key: 'instance_6_' + i,
                position:
                    [
                        4.25,
                        i * vertical_gap + vertical_offset,
                        2.5
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 10; i++) {
            instances.push({
                key: 'instance_7_' + i,
                position:
                    [
                        4.25,
                        i * vertical_gap + vertical_offset,
                        0.5
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 8; i++) {
            instances.push({
                key: 'instance_8_' + i,
                position:
                    [
                        4.25,
                        i * vertical_gap + vertical_offset,
                        -1.5
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < 3; i++) {
            instances.push({
                key: 'instance_9_' + i,
                position:
                    [
                        4.25,
                        i * vertical_gap + vertical_offset,
                        -3
                    ],
                rotation: [0, 0, 0],
            })
        }

        for (let i = 0; i < count; i++) {
            instances.push({
                key: 'instance_10_' + i,
                position:
                    [
                        Math.random() * 10 - 5,
                        Math.random() * 10 + 10 + 0.1 * i,
                        Math.random() * 10 - 5
                    ],
                rotation: [0, Math.random(), Math.random() * 2],
            })
        }

        return instances
    }, [])

    return <>
        <InstancedRigidBodies
            instances={instances}
            restitution={0.1}
            friction={0.3}
            colliders="cuboid"
        >
            <instancedMesh
                args={[null, null, count]}
                castShadow
                receiveShadow
            >
                <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
                <meshStandardMaterial color="gold" roughness={0} envMapIntensity={1} metalness={1} />
            </instancedMesh>
        </InstancedRigidBodies>
    </>
}