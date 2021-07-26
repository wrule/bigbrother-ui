import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';
import XApi from '@/components/xapi';
import Moment from 'moment';

@Component
export default class ViewApiHistory extends Vue {

  private get autoColumns() {
    return [
      {
        key: 'watcherType',
        dataIndex: 'watcherType',
        title: '上报类型',
      },
      {
        key: 'watcherName',
        dataIndex: 'watcherName',
        title: '上报人',
      },
      {
        key: 'prjName',
        dataIndex: 'prjName',
        title: '所属项目',
      },
      {
        key: 'prjVersion',
        dataIndex: 'prjVersion',
        title: '项目版本',
      },
      {
        key: 'reportTime',
        dataIndex: 'reportTime',
        title: '上报时间',
        width: 180,
        scopedSlots: { customRender: 'reportTime' },
      },
    ];
  }

  private get autoList() {
    return this.apiHistory || [];
  }

  private async getApiHistory(hash: string) {
    const rsp: any = await API.getApiHistory({
      hash,
    });
    if (rsp.success) {
      return rsp.data || [];
    }
    return [];
  }

  private apiHistory: any[] = [];

  private async updateApiHistory() {
    const hash = this.$route.params.hash || '';
    this.apiHistory = await this.getApiHistory(hash);
  }

  public mounted() {
    this.updateApiHistory();
  }

  public render(): VNode {
    return (
      <a-row class={style.view}>
        <a-space style="width: 100%" direction="vertical" size={20}>
          <a-row>
            <a-input-search />
          </a-row>
          <a-row>
            <a-table
              class={style.table}
              size="middle"
              bordered
              rowKey="id"
              columns={this.autoColumns}
              dataSource={this.autoList}
              scopedSlots={{
                expandedRowRender: (row: any) => {
                  return <XApi apiId={row.id} />;
                },
                reportTime: (value: any) => {
                  return Moment(value).format('YYYY-MM-DD HH:mm:ss');
                },
              }}>
            </a-table>
          </a-row>
        </a-space>
      </a-row>
    );
  }
}
