interface Hello {
  name: string;
}

interface Config {
  service: string;
  requests: Record<string, ConfigRequest>;
  types: Record<string, ConfigType>;
}

interface ConfigRequest {
  returns?: string;
  simple?: boolean;
  params?: Record<string, string>;
  security?: string;
  securityContext?: Record<string, string>;
}

interface ConfigType {
  parent?: string;
  props: Record<string, string>;
}
