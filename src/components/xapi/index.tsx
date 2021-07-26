import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';
import XCodeEditor from '../codeEditor';

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

  private rspData = '12343';

  private async updateApiHistoryDetail() {
    this.detail = await this.getApiHistoryDetail(this.apiId);
    console.log(this.detail);
    this.rspData = JSON.stringify(JSON.parse(this.detail.httpRspData), null, 2);
  }

  public mounted() {
    this.updateApiHistoryDetail();
  }

  public render(): VNode {
    return (
      <div class={style.com}>
        <a-form class={style.form}>
          <a-form-item
            label="基本信息">
            <a-descriptions
              bordered>
              <a-descriptions-item label="HTTP方法">
                {this.detail.httpMethod}
              </a-descriptions-item>
              <a-descriptions-item label="请求路径">
                {this.detail.httpPath}
              </a-descriptions-item>
            </a-descriptions>
          </a-form-item>
          <a-form-item
            label="出参数据">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="json"
              value={this.rspData}
            />
          </a-form-item>
          <a-form-item
            label="出参模型">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="json"
              value={this.rspData}
            />
          </a-form-item>
          <a-form-item
            label="入参数据">
            <XCodeEditor
              style="height: 320px"
              readonly={true}
              lang="json"
              value={this.rspData}
            />
          </a-form-item>
          <a-form-item
            label="HTTP信息">
            <span>未完善</span>
          </a-form-item>
        </a-form>
      </div>
    );
  }
}
