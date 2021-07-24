import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';

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

  private async updateApiHistoryDetail() {
    this.detail = await this.getApiHistoryDetail(this.apiId);
    console.log(this.detail);
  }

  public mounted() {
    this.updateApiHistoryDetail();
  }

  public render(): VNode {
    return (
      <a-descriptions
        bordered
        title="接口快照">
        <a-descriptions-item label="HTTP方法">
          {this.detail.httpMethod}
        </a-descriptions-item>
        <a-descriptions-item label="请求路径">
          {this.detail.httpPath}
        </a-descriptions-item>
        <a-descriptions-item label="项目名">
          {this.detail.prjName}
        </a-descriptions-item>
        <a-descriptions-item label="项目版本">
          {this.detail.prjVersion}
        </a-descriptions-item>
        <a-descriptions-item label="接口Hash">
          {this.detail.hash}
        </a-descriptions-item>
        <a-descriptions-item label="上报人">
          {this.detail.watcherName}
        </a-descriptions-item>
        <a-descriptions-item label="上报类型">
          {this.detail.watcherType}
        </a-descriptions-item>
        <a-descriptions-item label="上报时间">
          {this.detail.reportTime}
        </a-descriptions-item>
      </a-descriptions>
    );
  }
}
