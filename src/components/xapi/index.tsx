import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';
import XCodeEditor from '../codeEditor';
import { TSCode } from '@wrule/mishu';

@Component
export default class XApi extends Vue {
  @Prop({ default: -1 })
  private readonly apiId!: number;

  private async getApiHistoryDetail(id: number) {
    const rsp: any = await API.getApiHistoryDetail({
      id,
    });
    if (rsp.success) {
      return rsp.data;
    }
    return null;
  }

  private detail: any = { };

  private rspData = '';

  private rspModelCode = '';

  private async updateApiHistoryDetail() {
    this.detail = await this.getApiHistoryDetail(this.apiId);
    this.rspData = JSON.stringify(JSON.parse(this.detail.httpRspData), null, 2);
    this.rspModelCode = TSCode(JSON.parse(this.detail.httpRspData), 'rsp').DefineCode;
  }

  public mounted() {
    this.updateApiHistoryDetail();
  }

  public render(): VNode {
    return (
      <div class={style.com}>
        <a-tabs default-active-key="1">
          <a-tab-pane key="base" tab="基本信息">
            <a-descriptions style="width: 100%;" bordered>
              <a-descriptions-item label="HTTP方法">
                {this.detail.httpMethod}
              </a-descriptions-item>
              <a-descriptions-item label="请求路径">
                {this.detail.httpPath}
              </a-descriptions-item>
            </a-descriptions>
          </a-tab-pane>
          <a-tab-pane key="response" tab="出参数据">
            <div style="width: 100%;">
              <XCodeEditor
                style="height: 320px"
                readonly={true}
                lang="javascript"
                value={this.rspData}
              />
            </div>
          </a-tab-pane>
          <a-tab-pane key="responseModel" tab="出参模型">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="typescript"
              value={this.rspModelCode}
            />
          </a-tab-pane>
          <a-tab-pane key="request" tab="入参数据">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="javascript"
              value={'暂未整理'}
            />
          </a-tab-pane>
          <a-tab-pane key="requestModel" tab="入参模型">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="typescript"
              value={'暂未采集'}
            />
          </a-tab-pane>
          <a-tab-pane key="httpInfo" tab="HTTP信息">
            <span>暂未整理</span>
          </a-tab-pane>
          <a-tab-pane key="example" tab="API示例代码">
            <span>暂未开发</span>
          </a-tab-pane>
        </a-tabs>
      </div>
    );
  }
}
