import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class XApi extends Vue {
  @Prop({ default: -1 })
  private readonly apiId!: number;

  public render(): VNode {
    return (
      <div class={style.com}>
        <a-tabs
          default-active-key="response"
          animated={false}>
          <a-tab-pane key="base" tab="基本信息对比">
          </a-tab-pane>
          <a-tab-pane key="response" tab="出参数据对比">
          </a-tab-pane>
          <a-tab-pane key="responseModel" tab="出参模型对比">
          </a-tab-pane>
          <a-tab-pane key="request" tab="入参数据对比">
          </a-tab-pane>
          <a-tab-pane key="requestModel" tab="入参模型对比">
          </a-tab-pane>
          <a-tab-pane key="httpInfo" tab="HTTP信息对比">
          </a-tab-pane>
        </a-tabs>
      </div>
    );
  }
}
