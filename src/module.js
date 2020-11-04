import { PieChartCtrl } from './piechart_ctrl';
import { loadPluginCss } from 'app/plugins/sdk';

loadPluginCss({
  dark: 'plugins/grafana-piechart-panel-demo/css/piechart.dark.css',
  light: 'plugins/grafana-piechart-panel-demo/css/piechart.light.css',
});

export { PieChartCtrl as PanelCtrl };
