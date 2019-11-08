import * as _ from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import GroupColumnLayer, { GroupColumnLayerConfig } from './layer';

export interface GroupColumnConfig extends GroupColumnLayerConfig, PlotConfig {}

export default class GroupColumn<T extends GroupColumnConfig = GroupColumnConfig> extends BasePlot<T> {
  public static getDefaultOptions: typeof GroupColumnLayer.getDefaultOptions = GroupColumnLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = _.deepMix({}, props);
    layerProps.type = 'groupColumn';
    super.createLayers(layerProps);
  }
}
