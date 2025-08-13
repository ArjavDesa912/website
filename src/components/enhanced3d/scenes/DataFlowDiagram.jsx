import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Text, Sphere, Cylinder } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { useResponsive3D } from '../../../hooks/useResponsive3D';
import { PROFESSIONAL_COLORS } from '../../../constants/animations';

/**
 * Professional data flow visualization for compliance pipeline
 * Shows how data moves through the AI governance system
 */
const DataFlowDiagram = ({ scrollData = {}, stage = 'input' }) => {
  const groupRef = useRef();
  const particleRefs = useRef([]);
  
  const { qualityConfig, featureSupport, prefersReducedMotion } = useResponsive3D();
  const { scrollProgress, isVisible } = useScrollProgress({
    threshold: 0.1,
    respectReducedMotion: true
  });

  // Professional data flow stages
  const flowStages = useMemo(() => [
    {
      id: 'input',
      position: [-4, 2, 0],
      label: 'Data Input',
      color: PROFESSIONAL_COLORS.PRIMARY,
      icon: '📥',
      connections: ['validation']
    },
    {
      id: 'validation',
      position: [-2, 0, 0],
      label: 'Validation',
      color: PROFESSIONAL_COLORS.WARNING,
      icon: '🔍',
      connections: ['processing']
    },
    {
      id: 'processing',
      position: [0, -1, 0],
      label: 'AI Processing',
      color: PROFESSIONAL_COLORS.SECONDARY,
      icon: '🤖',
      connections: ['compliance']
    },
    {
      id: 'compliance',
      position: [2, 0, 0],
      label: 'Compliance Check',
      color: PROFESSIONAL_COLORS.SUCCESS,
      icon: '✅',
      connections: ['output']
    },
    {
      id: 'output',
      position: [4, 2, 0],
      label: 'Secure Output',
      color: PROFESSIONAL_COLORS.SUCCESS,
      icon: '📤',
      connections: []
    }
  ], []);

  // Professional animation for the entire diagram
  const diagramAnimation = useSpring({
    scale: isVisible && !prefersReducedMotion ? [1, 1, 1] : [0.8, 0.8, 0.8],
    opacity: isVisible ? 1 : 0,
    rotation: prefersReducedMotion ? [0, 0, 0] : [0, scrollProgress * 0.1, 0],
    config: { mass: 1, tension: 200, friction: 50 }
  });

  // Professional materials
  const materials = useMemo(() => ({
    stageMaterial: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.NEUTRAL),
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9
    }),
    connectionMaterial: new THREE.LineBasicMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.SECONDARY),
      transparent: true,
      opacity: 0.6
    }),
    particleMaterial: new THREE.MeshBasicMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.PRIMARY),
      transparent: true,
      opacity: 0.8
    })
  }), []);

  // Professional data particles animation
  useFrame((state, delta) => {
    if (!groupRef.current || prefersReducedMotion) return;

    // Professional floating animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

    // Professional particle movement along paths
    particleRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const time = state.clock.elapsedTime + index * 0.5;
        const progress = (Math.sin(time * 0.5) + 1) * 0.5;
        
        // Move particles along connection paths
        const stageIndex = index % (flowStages.length - 1);
        const startPos = flowStages[stageIndex].position;
        const endPos = flowStages[stageIndex + 1].position;
        
        ref.current.position.x = THREE.MathUtils.lerp(startPos[0], endPos[0], progress);
        ref.current.position.y = THREE.MathUtils.lerp(startPos[1], endPos[1], progress);
        ref.current.position.z = THREE.MathUtils.lerp(startPos[2], endPos[2], progress);
      }
    });
  });

  // Professional stage component
  const StageNode = ({ stageData, index }) => {
    const stageRef = useRef();
    
    const stageAnimation = useSpring({
      scale: isVisible ? [1, 1, 1] : [0, 0, 0],
      position: stageData.position,
      config: { mass: 1, tension: 280, friction: 60 },
      delay: index * 150
    });

    const stageMaterial = useMemo(() => 
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(stageData.color),
        metalness: 0.2,
        roughness: 0.3,
        transparent: true,
        opacity: 0.8
      }), [stageData.color]
    );

    return (
      <animated.group 
        ref={stageRef}
        position={stageAnimation.position}
        scale={stageAnimation.scale}
      >
        {/* Professional stage platform */}
        <Cylinder
          args={[0.8, 0.8, 0.2]}
          position={[0, 0, 0]}
          material={stageMaterial}
          castShadow={featureSupport.shadows}
          receiveShadow={featureSupport.shadows}
        />
        
        {/* Professional stage border */}
        <Cylinder
          args={[0.85, 0.85, 0.25]}
          position={[0, 0, 0]}
          material={materials.stageMaterial}
        />

        {/* Professional stage label */}
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.12}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.5}
        >
          {stageData.label}
        </Text>

        {/* Professional icon indicator */}
        <Text
          position={[0, -0.5, 0]}
          fontSize={0.2}
          anchorX="center"
          anchorY="middle"
        >
          {stageData.icon}
        </Text>

        {/* Professional status indicator */}
        <Sphere
          args={[0.05]}
          position={[0.6, 0, 0.15]}
          material={stageMaterial}
        />
      </animated.group>
    );
  };

  // Professional connection lines
  const ConnectionLines = () => {
    const connections = [];
    
    flowStages.forEach((stage, index) => {
      stage.connections.forEach(connectionId => {
        const targetStage = flowStages.find(s => s.id === connectionId);
        if (targetStage) {
          const points = [
            new THREE.Vector3(...stage.position),
            new THREE.Vector3(...targetStage.position)
          ];
          
          connections.push(
            <Line
              key={`${stage.id}-${connectionId}`}
              points={points}
              color={PROFESSIONAL_COLORS.SECONDARY}
              lineWidth={2}
              transparent
              opacity={0.6}
            />
          );
        }
      });
    });

    return <>{connections}</>;
  };

  // Professional data particles
  const DataParticles = () => {
    if (prefersReducedMotion || !featureSupport.particles) return null;

    const particles = [];
    const particleCount = qualityConfig.particles === 'full' ? 8 : 4;

    for (let i = 0; i < particleCount; i++) {
      const particleRef = useRef();
      particleRefs.current[i] = particleRef;

      particles.push(
        <Sphere
          key={i}
          ref={particleRef}
          args={[0.03]}
          material={materials.particleMaterial}
          position={flowStages[0].position}
        />
      );
    }

    return <>{particles}</>;
  };

  // Professional compliance metrics display
  const ComplianceMetrics = () => (
    <group position={[0, -3, 0]}>
      <Text
        position={[0, 0, 0]}
        fontSize={0.15}
        color={PROFESSIONAL_COLORS.SUCCESS}
        anchorX="center"
        anchorY="middle"
      >
        Data Processing Pipeline
      </Text>
      
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.08}
        color={PROFESSIONAL_COLORS.NEUTRAL}
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
      >
        Automated compliance validation at every stage
      </Text>

      {/* Professional metrics indicators */}
      <group position={[0, -1, 0]}>
        {[
          { label: 'Validation Rate', value: '99.8%', pos: [-2, 0, 0] },
          { label: 'Processing Speed', value: '< 100ms', pos: [0, 0, 0] },
          { label: 'Compliance Score', value: '98/100', pos: [2, 0, 0] }
        ].map((metric, index) => (
          <group key={metric.label} position={metric.pos}>
            <Text
              position={[0, 0.2, 0]}
              fontSize={0.06}
              color={PROFESSIONAL_COLORS.NEUTRAL}
              anchorX="center"
              anchorY="middle"
            >
              {metric.label}
            </Text>
            <Text
              position={[0, -0.1, 0]}
              fontSize={0.1}
              color={PROFESSIONAL_COLORS.SUCCESS}
              anchorX="center"
              anchorY="middle"
            >
              {metric.value}
            </Text>
          </group>
        ))}
      </group>
    </group>
  );

  if (!isVisible && !prefersReducedMotion) {
    return null; // Professional performance optimization
  }

  return (
    <animated.group 
      ref={groupRef}
      scale={diagramAnimation.scale}
      rotation={diagramAnimation.rotation}
    >
      {/* Professional stage nodes */}
      {flowStages.map((stage, index) => (
        <StageNode key={stage.id} stageData={stage} index={index} />
      ))}

      {/* Professional connection lines */}
      <ConnectionLines />

      {/* Professional data particles */}
      <DataParticles />

      {/* Professional metrics display */}
      <ComplianceMetrics />

      {/* Professional ambient lighting */}
      <ambientLight intensity={0.4} />
      <pointLight 
        position={[0, 5, 2]} 
        intensity={0.6}
        color={PROFESSIONAL_COLORS.PRIMARY}
        castShadow={featureSupport.shadows}
      />
    </animated.group>
  );
};

// Professional wrapper with error boundary
const SafeDataFlowDiagram = (props) => {
  try {
    return <DataFlowDiagram {...props} />;
  } catch (error) {
    console.warn('Professional Data Flow Diagram Error:', error);
    
    return (
      <group>
        <Text
          position={[0, 0, 0]}
          fontSize={0.4}
          color={PROFESSIONAL_COLORS.NEUTRAL}
          anchorX="center"
          anchorY="middle"
        >
          🔄 Data Processing Pipeline
        </Text>
      </group>
    );
  }
};

export default SafeDataFlowDiagram;