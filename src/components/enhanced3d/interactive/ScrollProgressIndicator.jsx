import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Text, RoundedBox } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { useScrollProgress, useGlobalScrollProgress } from '../../../hooks/useScrollProgress';
import { useResponsive3D } from '../../../hooks/useResponsive3D';
import { PROFESSIONAL_COLORS, SCROLL_POINTS } from '../../../constants/animations';

/**
 * Professional 3D scroll progress indicator
 * Shows current position in the compliance journey
 */
const ScrollProgressIndicator = ({ 
  position = [0, 0, 0],
  scale = 1,
  showLabels = true 
}) => {
  const groupRef = useRef();
  const progressRef = useRef();
  
  const { scrollProgress, scrollY } = useGlobalScrollProgress();
  const { qualityConfig, featureSupport, prefersReducedMotion } = useResponsive3D();

  // Professional section definitions
  const sections = useMemo(() => [
    {
      id: 'hero',
      label: 'AI Governance',
      color: PROFESSIONAL_COLORS.PRIMARY,
      range: SCROLL_POINTS.hero,
      icon: '🏠'
    },
    {
      id: 'problem',
      label: 'Challenges',
      color: PROFESSIONAL_COLORS.WARNING,
      range: SCROLL_POINTS.problem,
      icon: '⚠️'
    },
    {
      id: 'solution',
      label: 'Solutions',
      color: PROFESSIONAL_COLORS.SECONDARY,
      range: SCROLL_POINTS.solution,
      icon: '🛡️'
    },
    {
      id: 'features',
      label: 'Features',
      color: PROFESSIONAL_COLORS.SUCCESS,
      range: SCROLL_POINTS.features,
      icon: '⭐'
    },
    {
      id: 'cta',
      label: 'Get Started',
      color: PROFESSIONAL_COLORS.PREMIUM,
      range: SCROLL_POINTS.cta,
      icon: '🚀'
    }
  ], []);

  // Professional current section calculation
  const currentSection = useMemo(() => {
    return sections.find(section => 
      scrollProgress >= section.range.start && scrollProgress <= section.range.end
    ) || sections[0];
  }, [scrollProgress, sections]);

  // Professional progress bar animation
  const progressAnimation = useSpring({
    height: scrollProgress * 4, // 4 units total height
    color: currentSection.color,
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Professional materials
  const materials = useMemo(() => ({
    container: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.NEUTRAL),
      metalness: 0.1,
      roughness: 0.4,
      transparent: true,
      opacity: 0.3
    }),
    progress: new THREE.MeshStandardMaterial({
      color: new THREE.Color(currentSection.color),
      metalness: 0.2,
      roughness: 0.2,
      emissive: new THREE.Color(currentSection.color),
      emissiveIntensity: 0.1
    }),
    sectionMarker: new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ffffff'),
      transparent: true,
      opacity: 0.8
    })
  }), [currentSection.color]);

  // Professional frame animation
  useFrame((state, delta) => {
    if (!groupRef.current || prefersReducedMotion) return;

    // Professional subtle rotation
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

    // Professional progress bar glow effect
    if (progressRef.current && featureSupport.reflections) {
      const intensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      progressRef.current.material.emissiveIntensity = intensity;
    }
  });

  // Professional section markers
  const SectionMarkers = () => {
    return sections.map((section, index) => {
      const yPosition = (section.range.start + section.range.end) * 2 - 2; // Map to -2 to 2 range
      const isActive = section.id === currentSection.id;
      
      return (
        <group key={section.id} position={[0.6, yPosition, 0]}>
          {/* Professional marker sphere */}
          <animated.mesh
            scale={isActive ? [1.2, 1.2, 1.2] : [0.8, 0.8, 0.8]}
          >
            <sphereGeometry args={[0.08]} />
            <meshStandardMaterial
              color={isActive ? section.color : PROFESSIONAL_COLORS.NEUTRAL}
              emissive={isActive ? section.color : '#000000'}
              emissiveIntensity={isActive ? 0.2 : 0}
            />
          </animated.mesh>

          {/* Professional section label */}
          {showLabels && (
            <Text
              position={[0.4, 0, 0]}
              fontSize={0.08}
              color={isActive ? '#ffffff' : PROFESSIONAL_COLORS.NEUTRAL}
              anchorX="left"
              anchorY="middle"
              maxWidth={1}
            >
              {section.label}
            </Text>
          )}

          {/* Professional icon */}
          <Text
            position={[-0.3, 0, 0]}
            fontSize={0.1}
            anchorX="center"
            anchorY="middle"
          >
            {section.icon}
          </Text>
        </group>
      );
    });
  };

  // Professional progress percentage display
  const ProgressDisplay = () => (
    <group position={[0, 2.5, 0]}>
      <RoundedBox
        args={[1.2, 0.4, 0.1]}
        radius={0.05}
        smoothness={4}
        material={materials.container}
      />
      
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {Math.round(scrollProgress * 100)}%
      </Text>
      
      <Text
        position={[0, -0.4, 0]}
        fontSize={0.06}
        color={PROFESSIONAL_COLORS.NEUTRAL}
        anchorX="center"
        anchorY="middle"
      >
        Journey Progress
      </Text>
    </group>
  );

  return (
    <animated.group 
      ref={groupRef}
      position={position}
      scale={[scale, scale, scale]}
    >
      {/* Professional progress container */}
      <Cylinder
        args={[0.08, 0.08, 4]}
        position={[0, 0, 0]}
        material={materials.container}
        receiveShadow={featureSupport.shadows}
      />

      {/* Professional progress fill */}
      <animated.mesh
        ref={progressRef}
        position={[0, -2 + progressAnimation.height / 2, 0]}
      >
        <cylinderGeometry args={[0.06, 0.06, progressAnimation.height]} />
        <primitive object={materials.progress} attach="material" />
      </animated.mesh>

      {/* Professional section markers */}
      <SectionMarkers />

      {/* Professional progress display */}
      <ProgressDisplay />

      {/* Professional current section highlight */}
      <group position={[0, -2.8, 0]}>
        <RoundedBox
          args={[2, 0.6, 0.1]}
          radius={0.05}
          smoothness={4}
          material={new THREE.MeshStandardMaterial({
            color: new THREE.Color(currentSection.color),
            transparent: true,
            opacity: 0.8
          })}
        />
        
        <Text
          position={[0, 0.1, 0.06]}
          fontSize={0.1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {currentSection.label}
        </Text>
        
        <Text
          position={[0, -0.1, 0.06]}
          fontSize={0.06}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          opacity={0.8}
        >
          Current Section
        </Text>
      </group>

      {/* Professional ambient lighting for the indicator */}
      <pointLight 
        position={[1, 0, 1]} 
        intensity={0.3}
        color={currentSection.color}
        distance={3}
      />
    </animated.group>
  );
};

// Professional wrapper with error boundary
const SafeScrollProgressIndicator = (props) => {
  try {
    return <ScrollProgressIndicator {...props} />;
  } catch (error) {
    console.warn('Professional Scroll Progress Indicator Error:', error);
    
    return (
      <group position={props.position || [0, 0, 0]}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.3}
          color={PROFESSIONAL_COLORS.NEUTRAL}
          anchorX="center"
          anchorY="middle"
        >
          📊 Progress
        </Text>
      </group>
    );
  }
};

export default SafeScrollProgressIndicator;