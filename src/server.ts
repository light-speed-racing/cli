/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface OGPServerConfig {
  name: string;
  hostname: string;
  protocol: string;
  port: number;
  pathname: string;
  agent: {
    ip: string;
    port: string;
    mod_key: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
