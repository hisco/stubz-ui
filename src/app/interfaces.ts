export interface Plugin {
  name: string;
  status: boolean;
  variations: Variation[];
};

export interface Variation {
  defaultStatus: boolean;
  name: string;
  routerName: string;
  variationData: VariationData;
};

export interface VariationData {
  pathName: string;
  pathMethod: string;
}
