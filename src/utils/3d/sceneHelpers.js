import * as THREE from 'three';
import { PROFESSIONAL_COLORS, PROFESSIONAL_TRANSFORMS } from '../../constants/animations';

/**
 * Professional 3D Scene Helpers
 * Enterprise-grade utilities for managing 3D scenes with accessibility and performance focus
 */

// Professional lighting setup for enterprise aesthetics
export const createProfessionalLighting = (scene, options = {}) => {
  const {
    ambientIntensity = 0.6,
    directionalIntensity = 0.8,
    enableShadows = true,
    shadowQuality = 'medium',
  } = options;

  // Professional ambient lighting for enterprise visibility
  const ambientLight = new THREE.AmbientLight(0xffffff, ambientIntensity);
  scene.add(ambientLight);

  // Professional directional lighting for depth and professionalism
  const directionalLight = new THREE.DirectionalLight(0xffffff, directionalIntensity);
  directionalLight.position.set(10, 10, 5);
  
  if (enableShadows) {
    directionalLight.castShadow = true;
    
    // Professional shadow configuration
    const shadowMapSize = shadowQuality === 'high' ? 2048 : 
                         shadowQuality === 'medium' ? 1024 : 512;
    
    directionalLight.shadow.mapSize.width = shadowMapSize;
    directionalLight.shadow.mapSize.height = shadowMapSize;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    
    // Professional shadow bias for clean rendering
    directionalLight.shadow.bias = -0.0001;
  }
  
  scene.add(directionalLight);

  // Professional rim lighting for object definition
  const rimLight = new THREE.DirectionalLight(0x4a9eff, 0.3);
  rimLight.position.set(-10, 5, -5);
  scene.add(rimLight);

  return {
    ambientLight,
    directionalLight,
    rimLight,
    
    // Professional lighting controls
    updateIntensity: (ambient, directional) => {
      ambientLight.intensity = ambient;
      directionalLight.intensity = directional;
    },
    
    toggleShadows: (enabled) => {
      directionalLight.castShadow = enabled;
    },
  };
};

// Professional camera setup with enterprise constraints
export const createProfessionalCamera = (containerWidth, containerHeight, options = {}) => {
  const {
    fov = 45, // Professional field of view
    near = 0.1,
    far = 1000,
    initialPosition = [0, 0, 10],
    lookAt = [0, 0, 0],
  } = options;

  const camera = new THREE.PerspectiveCamera(
    fov,
    containerWidth / containerHeight,
    near,
    far
  );

  camera.position.set(...initialPosition);
  camera.lookAt(...lookAt);

  return {
    camera,
    
    // Professional camera utilities
    updateAspectRatio: (width, height) => {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    },
    
    smoothLookAt: (target, duration = 1000) => {
      // Professional smooth camera transitions
      const startPosition = camera.position.clone();
      const endPosition = new THREE.Vector3(...target);
      
      return new Promise((resolve) => {
        let startTime = null;
        
        const animate = (time) => {
          if (!startTime) startTime = time;
          const progress = Math.min((time - startTime) / duration, 1);
          
          // Professional easing
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          
          camera.position.lerpVectors(startPosition, endPosition, easedProgress);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            resolve();
          }
        };
        
        requestAnimationFrame(animate);
      });
    },
  };
};

// Professional material creation with enterprise aesthetics
export const createProfessionalMaterials = () => {
  const materials = {
    // Professional glass material for overlays
    glass: new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0,
      roughness: 0.1,
      transmission: 0.9,
      transparent: true,
      opacity: 0.8,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    }),

    // Professional metal material for premium elements
    metal: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.NEUTRAL),
      metalness: 0.8,
      roughness: 0.2,
      envMapIntensity: 1,
    }),

    // Professional primary material for brand elements
    primary: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.PRIMARY),
      metalness: 0.1,
      roughness: 0.4,
    }),

    // Professional success material for compliance indicators
    success: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.SUCCESS),
      metalness: 0.1,
      roughness: 0.4,
    }),

    // Professional warning material for attention elements
    warning: new THREE.MeshStandardMaterial({
      color: new THREE.Color(PROFESSIONAL_COLORS.WARNING),
      metalness: 0.1,
      roughness: 0.4,
    }),
  };

  return {
    materials,
    
    // Professional material utilities
    updateOpacity: (materialName, opacity) => {
      if (materials[materialName]) {
        materials[materialName].transparent = opacity < 1;
        materials[materialName].opacity = opacity;
      }
    },
    
    createCustomMaterial: (config) => {
      return new THREE.MeshStandardMaterial({
        color: config.color || 0xffffff,
        metalness: config.metalness || 0.1,
        roughness: config.roughness || 0.4,
        transparent: config.transparent || false,
        opacity: config.opacity || 1,
        ...config,
      });
    },
  };
};

// Professional geometry helpers for clean, enterprise shapes
export const createProfessionalGeometries = () => {
  return {
    // Professional rounded box for UI elements
    roundedBox: (width = 1, height = 1, depth = 1, radius = 0.1) => {
      const shape = new THREE.Shape();
      const hw = width / 2;
      const hh = height / 2;
      
      shape.moveTo(-hw + radius, -hh);
      shape.lineTo(hw - radius, -hh);
      shape.quadraticCurveTo(hw, -hh, hw, -hh + radius);
      shape.lineTo(hw, hh - radius);
      shape.quadraticCurveTo(hw, hh, hw - radius, hh);
      shape.lineTo(-hw + radius, hh);
      shape.quadraticCurveTo(-hw, hh, -hw, hh - radius);
      shape.lineTo(-hw, -hh + radius);
      shape.quadraticCurveTo(-hw, -hh, -hw + radius, -hh);
      
      return new THREE.ExtrudeGeometry(shape, {
        depth: depth,
        bevelEnabled: false,
      });
    },

    // Professional dashboard screen geometry
    screen: (width = 2, height = 1.2, depth = 0.1) => {
      return new THREE.BoxGeometry(width, height, depth);
    },

    // Professional pillar for charts and data
    pillar: (radius = 0.1, height = 1, segments = 8) => {
      return new THREE.CylinderGeometry(radius, radius, height, segments);
    },

    // Professional sphere for nodes and indicators
    sphere: (radius = 0.2, segments = 16) => {
      return new THREE.SphereGeometry(radius, segments, segments);
    },
  };
};

// Professional animation helpers with enterprise constraints
export const createProfessionalAnimations = () => {
  return {
    // Professional floating animation
    createFloatingAnimation: (object, options = {}) => {
      const {
        amplitude = 0.1,
        frequency = 0.002,
        offset = 0,
      } = options;

      const originalY = object.position.y;
      
      return {
        update: (time) => {
          object.position.y = originalY + Math.sin(time * frequency + offset) * amplitude;
        },
      };
    },

    // Professional rotation animation
    createRotationAnimation: (object, options = {}) => {
      const {
        speed = 0.001,
        axis = 'y',
      } = options;

      return {
        update: (time) => {
          if (axis === 'x') object.rotation.x += speed;
          if (axis === 'y') object.rotation.y += speed;
          if (axis === 'z') object.rotation.z += speed;
        },
      };
    },

    // Professional mouse tracking with constraints
    createMouseTracking: (object, camera, options = {}) => {
      const {
        intensity = 0.1,
        maxRotation = PROFESSIONAL_TRANSFORMS.MAX_ROTATION * Math.PI / 180,
      } = options;

      return {
        update: (mouseX, mouseY) => {
          const rotationX = mouseY * intensity;
          const rotationY = mouseX * intensity;
          
          object.rotation.x = THREE.MathUtils.clamp(rotationX, -maxRotation, maxRotation);
          object.rotation.y = THREE.MathUtils.clamp(rotationY, -maxRotation, maxRotation);
        },
      };
    },

    // Professional scroll-based animation
    createScrollAnimation: (object, options = {}) => {
      const {
        translateY = 2,
        rotateX = 0.2,
        rotateY = 0.2,
      } = options;

      const initialPosition = object.position.clone();
      const initialRotation = object.rotation.clone();

      return {
        update: (scrollProgress) => {
          // Professional smooth transitions
          object.position.y = initialPosition.y + (scrollProgress * translateY);
          object.rotation.x = initialRotation.x + (scrollProgress * rotateX);
          object.rotation.y = initialRotation.y + (scrollProgress * rotateY);
        },
      };
    },
  };
};

// Professional performance optimization utilities
export const optimizeScenePerformance = (scene, renderer, options = {}) => {
  const {
    enableFrustumCulling = true,
    enableOcclusion = false,
    maxLights = 8,
  } = options;

  // Professional rendering optimizations
  if (enableFrustumCulling) {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.frustumCulled = true;
      }
    });
  }

  // Professional light management
  let lightCount = 0;
  scene.traverse((object) => {
    if (object.isLight && lightCount >= maxLights) {
      object.visible = false;
    } else if (object.isLight) {
      lightCount++;
    }
  });

  return {
    // Professional performance monitoring
    getTriangleCount: () => {
      let triangleCount = 0;
      scene.traverse((object) => {
        if (object.isMesh && object.geometry) {
          const geometry = object.geometry;
          if (geometry.index) {
            triangleCount += geometry.index.count / 3;
          } else if (geometry.attributes.position) {
            triangleCount += geometry.attributes.position.count / 3;
          }
        }
      });
      return triangleCount;
    },

    // Professional memory management
    disposeUnusedResources: () => {
      scene.traverse((object) => {
        if (object.isMesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    },
  };
};

export default {
  createProfessionalLighting,
  createProfessionalCamera,
  createProfessionalMaterials,
  createProfessionalGeometries,
  createProfessionalAnimations,
  optimizeScenePerformance,
};