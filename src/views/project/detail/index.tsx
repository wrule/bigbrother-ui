import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';
import XHttpMethod from '@/components/httpMethod';
import XApi from '@/components/xapi';

@Component
export default class ViewProjectDetail extends Vue {

  public get autoColumns() {
    return [
      {
        key: 'httpMethod',
        dataIndex: 'httpMethod',
        title: 'HTTP方法',
        width: 100,
        scopedSlots: { customRender: 'httpMethod' },
      },
      { key: 'httpPath', dataIndex: 'httpPath', title: '接口路径', },
      {
        key: 'apiHistoryNum',
        dataIndex: 'apiHistoryNum',
        title: '变更次数',
        width: 80,
        align: 'center',
      },
      {
        key: 'opts',
        dataIndex: 'opts',
        title: '操作',
        width: 80,
        scopedSlots: { customRender: 'opts' },
        align: 'center',
      },
    ];
  }

  public get autoList() {
    return this.apiList || [];
  }

  private async getProjectApiList(projectName: string) {
    const rsp: any = await API.getProjectApiList({
      projectName,
    });
    if (rsp.success) {
      return rsp.data || [];
    }
    return [];
  }

  private apiList: any[] = [];

  private async updateProjectApiList() {
    const projectName = this.$route.params.name || '';
    this.apiList = await this.getProjectApiList(projectName);
    console.log(this.apiList);
  }

  public mounted() {
    this.updateProjectApiList();
  }
  
  private handleApiClick(api: any) {
    this.$router.push({
      name: 'xapi/history',
      params: {
        hash: api.hash,
      },
    });
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
              rowKey="hash"
              bordered
              size="middle"
              columns={this.autoColumns}
              dataSource={this.autoList}
              scopedSlots={{
                httpMethod: (value: any, row: any) => {
                  return <XHttpMethod method={value} />;
                },
                opts: (field: any, row: any) => {
                  return <a
                    onClick={() => this.handleApiClick(row)}>
                    变更历史
                  </a>
                },
                expandedRowRender: (row: any) => {
                  return <XApi apiId={row.apiLatestId} />;
                },
              }}>
            </a-table>
          </a-row>
        </a-space>
      </a-row>
    );
  }
}
