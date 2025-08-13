/**
 * Professional Performance Optimizer for Enterprise 3D Applications
 * Ensures consistent 60fps performance on business hardware
 */

import { PERFORMANCE_THRESHOLDS } from '../../constants/animations';

class ProfessionalPerformanceOptimizer {
  constructor(options = {}) {
    this.options = {
      targetFPS: 60,
      monitoringInterval: 1000, // Check performance every second
      adaptiveQuality: true,
      performanceHistory: 10, // Keep last 10 performance samples
      emergencyMode: true, // Enable emergency performance mode
      ...options,
    };

    // Professional performance tracking
    this.performanceData = {
      frameCount: 0,
      lastTime: performance.now(),
      currentFPS: 60,
      averageFPS: 60,
      fpsHistory: [],
      qualityLevel: 'high',
      isEmergencyMode: false,
    };

    // Professional quality configurations
    this.qualityLevels = {
      ultra: {
        shadowMapSize: 4096,
        maxLights: 12,
        particleCount: 1000,
        lodDistance: 100,
        renderScale: 1.0,
        antialias: true,
        shadows: true,
        reflections: true,
        bloom: true,
        ssao: true,
      },
      high: {
        shadowMapSize: 2048,
        maxLights: 8,
        particleCount: 500,
        lodDistance: 75,
        renderScale: 1.0,
        antialias: true,
        shadows: true,
        reflections: true,
        bloom: true,
        ssao: false,
      },
      medium: {
        shadowMapSize: 1024,
        maxLights: 6,
        particleCount: 250,
        lodDistance: 50,
        renderScale: 0.8,
        antialias: true,
        shadows: true,
        reflections: false,
        bloom: false,
        ssao: false,
      },
      low: {
        shadowMapSize: 512,
        maxLights: 4,
        particleCount: 100,
        lodDistance: 25,
        renderScale: 0.6,
        antialias: false,
        shadows: false,
        reflections: false,
        bloom: false,
        ssao: false,
      },
      emergency: {
        shadowMapSize: 256,
        maxLights: 2,
        particleCount: 50,
        lodDistance: 15,
        renderScale: 0.4,
        antialias: false,
        shadows: false,
        reflections: false,
        bloom: false,
        ssao: false,
      },
    };

    // Professional monitoring setup
    this.isMonitoring = false;
    this.monitoringId = null;
    this.onQualityChange = null;
    this.onPerformanceUpdate = null;

    // Professional device detection
    this.deviceCapabilities = this.detectDeviceCapabilities();
  }

  // Professional device capability detection
  detectDeviceCapabilities() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (!gl) {
      return {
        webglSupported: false,
        maxTextureSize: 512,
        maxRenderBufferSize: 512,
        maxVertexUniforms: 128,
        maxFragmentUniforms: 64,
        deviceClass: 'low',
      };
    }

    const capabilities = {
      webglSupported: true,
      maxTextureSize: gl.getParameter(gl.MAX_TEXTURE_SIZE),
      maxRenderBufferSize: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
      maxVertexUniforms: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
      maxFragmentUniforms: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
      maxVaryingVectors: gl.getParameter(gl.MAX_VARYING_VECTORS),
      deviceClass: this.classifyDevice(),
    };

    // Professional memory estimation
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (debugInfo) {
      capabilities.renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      capabilities.vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    }

    canvas.remove();
    return capabilities;
  }

  // Professional device classification
  classifyDevice() {
    const userAgent = navigator.userAgent;
    const memory = navigator.deviceMemory || 4; // GB, default to 4GB
    const cores = navigator.hardwareConcurrency || 4;
    
    // Professional mobile device detection
    if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      if (memory >= 6 && cores >= 6) return 'mobile-high';
      if (memory >= 4 && cores >= 4) return 'mobile-medium';
      return 'mobile-low';
    }

    // Professional desktop classification
    if (memory >= 16 && cores >= 8) return 'desktop-high';
    if (memory >= 8 && cores >= 4) return 'desktop-medium';
    return 'desktop-low';
  }

  // Professional performance monitoring
  startMonitoring() {
    if (this.isMonitoring) return;

    this.isMonitoring = true;
    this.performanceData.lastTime = performance.now();
    this.performanceData.frameCount = 0;

    this.monitoringId = setInterval(() => {
      this.updatePerformanceMetrics();
    }, this.options.monitoringInterval);
  }

  stopMonitoring() {
    if (!this.isMonitoring) return;

    this.isMonitoring = false;
    if (this.monitoringId) {
      clearInterval(this.monitoringId);
      this.monitoringId = null;
    }
  }

  // Professional frame counting
  recordFrame() {
    if (!this.isMonitoring) return;
    this.performanceData.frameCount++;
  }

  // Professional performance metrics update
  updatePerformanceMetrics() {
    const currentTime = performance.now();
    const deltaTime = currentTime - this.performanceData.lastTime;
    
    if (deltaTime < this.options.monitoringInterval) return;

    // Professional FPS calculation
    const currentFPS = Math.round((this.performanceData.frameCount * 1000) / deltaTime);
    this.performanceData.currentFPS = currentFPS;
    
    // Professional FPS history management
    this.performanceData.fpsHistory.push(currentFPS);
    if (this.performanceData.fpsHistory.length > this.options.performanceHistory) {
      this.performanceData.fpsHistory.shift();
    }

    // Professional average FPS calculation
    this.performanceData.averageFPS = Math.round(
      this.performanceData.fpsHistory.reduce((a, b) => a + b, 0) / 
      this.performanceData.fpsHistory.length
    );

    // Professional quality adjustment
    if (this.options.adaptiveQuality) {
      this.adjustQualityLevel();
    }

    // Professional callbacks
    if (this.onPerformanceUpdate) {
      this.onPerformanceUpdate({
        currentFPS,
        averageFPS: this.performanceData.averageFPS,
        qualityLevel: this.performanceData.qualityLevel,
        isEmergencyMode: this.performanceData.isEmergencyMode,
      });
    }

    // Reset for next measurement
    this.performanceData.frameCount = 0;
    this.performanceData.lastTime = currentTime;
  }

  // Professional quality level adjustment
  adjustQualityLevel() {
    const avgFPS = this.performanceData.averageFPS;
    const targetFPS = this.getTargetFPS();
    let newQualityLevel = this.performanceData.qualityLevel;
    let isEmergencyMode = false;

    // Professional quality level logic
    if (avgFPS < 15) {
      newQualityLevel = 'emergency';
      isEmergencyMode = true;
    } else if (avgFPS < targetFPS * 0.4) {
      newQualityLevel = 'low';
    } else if (avgFPS < targetFPS * 0.6) {
      newQualityLevel = 'medium';
    } else if (avgFPS < targetFPS * 0.9) {
      newQualityLevel = 'high';
    } else if (avgFPS >= targetFPS && this.deviceCapabilities.deviceClass.includes('high')) {
      newQualityLevel = 'ultra';
    }

    // Professional emergency mode detection
    if (this.options.emergencyMode && avgFPS < 20 && this.performanceData.fpsHistory.length >= 3) {
      const recentlyBad = this.performanceData.fpsHistory.slice(-3).every(fps => fps < 20);
      if (recentlyBad) {
        isEmergencyMode = true;
        newQualityLevel = 'emergency';
      }
    }

    // Professional quality change notification
    if (newQualityLevel !== this.performanceData.qualityLevel || isEmergencyMode !== this.performanceData.isEmergencyMode) {
      this.performanceData.qualityLevel = newQualityLevel;
      this.performanceData.isEmergencyMode = isEmergencyMode;

      if (this.onQualityChange) {
        this.onQualityChange(newQualityLevel, this.getQualityConfig(newQualityLevel));
      }
    }
  }

  // Professional target FPS based on device
  getTargetFPS() {
    const deviceClass = this.deviceCapabilities.deviceClass;
    
    if (deviceClass.includes('mobile')) {
      return PERFORMANCE_THRESHOLDS.MOBILE_TARGET_FPS;
    } else if (deviceClass.includes('medium')) {
      return PERFORMANCE_THRESHOLDS.TABLET_TARGET_FPS;
    } else {
      return PERFORMANCE_THRESHOLDS.DESKTOP_TARGET_FPS;
    }
  }

  // Professional quality configuration getter
  getQualityConfig(level = null) {
    const qualityLevel = level || this.performanceData.qualityLevel;
    return { ...this.qualityLevels[qualityLevel] };
  }

  // Professional manual quality override
  setQualityLevel(level) {
    if (this.qualityLevels[level]) {
      this.performanceData.qualityLevel = level;
      this.performanceData.isEmergencyMode = level === 'emergency';
      
      if (this.onQualityChange) {
        this.onQualityChange(level, this.getQualityConfig(level));
      }
    }
  }

  // Professional callback setters
  onQualityLevelChange(callback) {
    this.onQualityChange = callback;
  }

  onPerformanceDataUpdate(callback) {
    this.onPerformanceUpdate = callback;
  }

  // Professional scene optimization recommendations
  getOptimizationRecommendations(sceneStats) {
    const config = this.getQualityConfig();
    const recommendations = [];

    if (sceneStats.triangleCount > 100000 && config.lodDistance < 50) {
      recommendations.push({
        type: 'geometry',
        message: 'Consider implementing Level of Detail (LOD) for complex geometries',
        action: 'reduceLOD',
      });
    }

    if (sceneStats.lightCount > config.maxLights) {
      recommendations.push({
        type: 'lighting',
        message: `Reduce light count to ${config.maxLights} for optimal performance`,
        action: 'reduceLights',
      });
    }

    if (sceneStats.particleCount > config.particleCount) {
      recommendations.push({
        type: 'particles',
        message: `Reduce particle count to ${config.particleCount}`,
        action: 'reduceParticles',
      });
    }

    return recommendations;
  }

  // Professional performance report
  getPerformanceReport() {
    return {
      ...this.performanceData,
      deviceCapabilities: this.deviceCapabilities,
      qualityConfig: this.getQualityConfig(),
      targetFPS: this.getTargetFPS(),
      recommendations: this.getOptimizationRecommendations({}),
    };
  }

  // Professional cleanup
  dispose() {
    this.stopMonitoring();
    this.onQualityChange = null;
    this.onPerformanceUpdate = null;
  }
}

// Professional singleton instance for global use
let globalOptimizer = null;

export const getGlobalOptimizer = (options = {}) => {
  if (!globalOptimizer) {
    globalOptimizer = new ProfessionalPerformanceOptimizer(options);
  }
  return globalOptimizer;
};

export const createOptimizer = (options = {}) => {
  return new ProfessionalPerformanceOptimizer(options);
};

export default ProfessionalPerformanceOptimizer;