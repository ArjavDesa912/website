import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text, RoundedBox, Sphere, Cylinder } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { useScrollProgress } from '../../../hooks/useScrollProgress';
import { useResponsive3D } from '../../../hooks/useResponsive3D';
import { PROFESSIONAL_COLORS, PROFESSIONAL_TRANSFORMS } from '../../../constants/animations';

/**
 * Professional Compliance Dashboard 3D Visualization
 * Subtle, enterprise-grade dashboard representation with accessibility compliance
 */
const ComplianceVisualization = ({ scrollData = {}, mousePosition = { x: 0, y: 0 } }) => {
  const groupRef = useRef();
  const dashboardRef = useRef();
  const metricsRefs = useRef([]);
  
  const { camera } = useThree();
  const { qualityConfig, featureSupport, prefersReducedMotion } = useResponsive3D();
  const { scrollProgress, isVisible } = useScrollProgress({
    offset: 100,
    respectReducedMotion: true,
  });

  // Professional dashboard data
  const dashboardMetrics = useMemo(() => [
    { 
      label: 'Compliance Score', 
      value: '98%', 
      status: 'success', 
      position: [-2, 1, 0],
      color: PROFESSIONAL_COLORS.SUCCESS,
    },
    { 
      label: 'AI Models', 
      value: '127', 
      status: 'active', 
      position: [0, 1, 0],
      color: PROFESSIONAL_COLORS.PRIMARY,
    },
    { 
      label: 'Risk Level', 
      value: 'Low', 
      status: 'safe', 
      position: [2, 1, 0],
      color: PROFESSIONAL_COLORS.SUCCESS,
    },
    { 
      label: 'Active Audits', 
      value: '12', 
      status: 'monitoring', 
      position: [-2, -1, 0],
      color: PROFESSIONAL_COLORS.SECONDARY,
    },
    { 
      label: 'Regulations', 
      value: '8', 
      status: 'compliant', 
      position: [0, -1, 0],
      color: PROFESSIONAL_COLORS.PRIMARY,
    },
    { 
      label: 'Uptime', 
      value: '99.9%', 
      status: 'excellent', 
      position: [2, -1, 0],
      color: PROFESSIONAL_COLORS.SUCCESS,
    },
  ], []);

  // Professional spring animations with accessibility consideration
  const dashboardAnimation = useSpring({
    scale: isVisible && !prefersReducedMotion ? [1, 1, 1] : [0.9, 0.9, 0.9],
    opacity: isVisible ? 1 : 0,
    rotation: prefersReducedMotion ? [0, 0, 0] : [
      mousePosition.y * 0.1 * PROFESSIONAL_TRANSFORMS.MAX_ROTATION * Math.PI / 180,
      mousePosition.x * 0.1 * PROFESSIONAL_TRANSFORMS.MAX_ROTATION * Math.PI / 180,
      0
    ],
    config: { mass: 1, tension: 280, friction: 60 },
  });

  // Professional metric animations
  const metricAnimations = useSpring({
    from: { scale: 0, opacity: 0 },
    to: { 
      scale: isVisible ? 1 : 0, 
      opacity: isVisible ? 1 : 0 
    },
    config: { mass: 1, tension: 200, friction: 40 },
    delay: prefersReducedMotion ? 0 : 300,
  });

  // Professional materials
  const materials = useMemo(() => ({
    dashboard: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.NEUTRAL),
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
      opacity: 0.9,
    }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.1,
      transmission: featureSupport.reflections ? 0.7 : 0.3,
      transparent: true,
      opacity: 0.8,
      clearcoat: featureSupport.reflections ? 1 : 0,
    }),
    metric: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.PRIMARY),
      metalness: 0.2,
      roughness: 0.3,
    }),
  }), [featureSupport]);

  // Professional frame animation
  useFrame((state, delta) => {
    if (!groupRef.current || prefersReducedMotion) return;

    // Professional subtle floating animation
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Professional metric hover effects
    metricsRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.rotation.y += delta * 0.2;
        ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.8 + index) * 0.05;
      }
    });
  });

  // Professional metric component
  const MetricDisplay = ({ metric, index }) => {
    const metricRef = useRef();
    metricsRefs.current[index] = metricRef;

    const metricMaterial = useMemo(() => 
      new THREE.MeshStandardMaterial({
        color: new THREE.Color(metric.color),
        metalness: 0.1,
        roughness: 0.4,
      }), [metric.color]
    );

    return (
      <animated.group 
        ref={metricRef}
        position={metric.position}
        scale={metricAnimations.scale}
      >
        {/* Professional metric card background */}
        <RoundedBox
          args={[1.5, 0.8, 0.1]}
          radius={0.05}
          smoothness={4}
          material={materials.glass}
          castShadow={featureSupport.shadows}
          receiveShadow={featureSupport.shadows}
        />
        
        {/* Professional metric indicator */}
        <Sphere
          args={[0.08]}
          position={[-0.6, 0.2, 0.06]}
          material={metricMaterial}
        />
        
        {/* Professional metric text */}
        <Text
          position={[-0.4, 0.2, 0.06]}
          fontSize={0.08}
          color={PROFESSIONAL_COLORS.NEUTRAL}
          anchorX="left"
          anchorY="middle"
          maxWidth={1}
        >
          {metric.label}
        </Text>
        
        <Text
          position={[-0.4, -0.1, 0.06]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="left"
          anchorY="middle"
          maxWidth={1}
        >
          {metric.value}
        </Text>
        
        {/* Professional status bar */}
        <RoundedBox
          args={[1.2, 0.05, 0.02]}
          radius={0.025}
          position={[0, -0.3, 0.06]}
          material={metricMaterial}
        />
      </animated.group>
    );
  };

  // Professional European compliance indicator
  const EuropeanIndicator = () => {
    const flagColors = [
      '#003399', // EU Blue
      '#FFCC00', // EU Yellow
    ];

    return (
      <group position={[0, 2.5, 0]}>
        {/* Professional EU flag representation */}
        <RoundedBox
          args={[1.5, 1, 0.05]}
          radius={0.02}
          material={new THREE.MeshStandardMaterial({
            color: flagColors[0],
            metalness: 0.1,
            roughness: 0.4,
          })}
        />
        
        {/* Professional stars indicator */}
        {[...Array(4)].map((_, i) => (
          <Sphere
            key={i}
            args={[0.03]}
            position={[
              -0.4 + (i * 0.27), 
              0, 
              0.03
            ]}
            material={new THREE.MeshStandardMaterial({
              color: flagColors[1],
              metalness: 0.3,
              roughness: 0.2,
            })}
          />
        ))}
        
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.1}
          color={PROFESSIONAL_COLORS.PRIMARY}
          anchorX="center"
          anchorY="middle"
        >
          EU GDPR Compliant
        </Text>
      </group>
    );
  };

  // Professional dashboard frame
  const DashboardFrame = () => (
    <animated.group 
      ref={dashboardRef}
      scale={dashboardAnimation.scale}
      rotation={dashboardAnimation.rotation}
    >
      {/* Professional main dashboard screen */}
      <RoundedBox
        args={[6, 4, 0.2]}
        radius={0.1}
        smoothness={4}
        material={materials.dashboard}
        position={[0, 0, -0.1]}
        castShadow={featureSupport.shadows}
        receiveShadow={featureSupport.shadows}
      />
      
      {/* Professional screen overlay */}
      <RoundedBox
        args={[5.8, 3.8, 0.05]}
        radius={0.08}
        smoothness={4}
        material={materials.glass}
        position={[0, 0, 0.1]}
      />
      
      {/* Professional dashboard metrics */}
      {dashboardMetrics.map((metric, index) => (
        <MetricDisplay 
          key={metric.label} 
          metric={metric} 
          index={index} 
        />
      ))}
      
      {/* Professional title */}
      <Text
        position={[0, 2, 0.15]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={5}
      >
        AI Compliance Dashboard
      </Text>
      
      {/* Professional subtitle */}
      <Text
        position={[0, 1.7, 0.15]}
        fontSize={0.08}
        color={PROFESSIONAL_COLORS.SECONDARY}
        anchorX="center"
        anchorY="middle"
        maxWidth={5}
      >
        Real-time monitoring and governance for enterprise AI systems
      </Text>
    </animated.group>
  );

  if (!isVisible && !prefersReducedMotion) {
    return null; // Professional performance optimization
  }

  return (
    <animated.group 
      ref={groupRef}
      opacity={dashboardAnimation.opacity}
    >
      <DashboardFrame />
      <EuropeanIndicator />
      
      {/* Professional ambient lighting for depth */}
      <ambientLight intensity={0.3} />
      <pointLight 
        position={[5, 5, 5]} 
        intensity={0.5}
        color={PROFESSIONAL_COLORS.PRIMARY}
        castShadow={featureSupport.shadows}
      />
    </animated.group>
  );
};

// Professional wrapper component with error boundary
const SafeComplianceVisualization = (props) => {
  try {
    return <ComplianceVisualization {...props} />;
  } catch (error) {
    console.warn('Professional 3D Compliance Visualization Error:', error);
    
    // Professional fallback
    return (
      <group>
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color={PROFESSIONAL_COLORS.NEUTRAL}
          anchorX="center"
          anchorY="middle"
        >
          📊 Professional Dashboard
        </Text>
      </group>
    );
  }
};

export default SafeComplianceVisualization;