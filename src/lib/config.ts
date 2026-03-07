export interface SiteConfig {
  sections: {
    socialLinks: boolean;
    // Agrega otras secciones si es necesario
  };
  // Agrega más propiedades de configuración según sea necesario
}

export function getSiteConfig(): SiteConfig {
  return {
    sections: {
      socialLinks: true, // Ajusta según tus necesidades
    },
    // Configuración adicional
  };
}