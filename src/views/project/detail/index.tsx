import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';

@Component
export default class ViewProjectDetail extends Vue {

  public get autoColumns() {
    return [
      { key: 'httpMethod', dataIndex: 'httpMethod', title: 'HTTP方法', width: 100, },
      { key: 'httpPath', dataIndex: 'httpPath', title: '接口路径', },
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

  public render(): VNode {
    return (
      <a-row class={style.view}>
        <a-space style="width: 100%" direction="vertical" size={20}>
          <a-row>
            <a-input-search />
          </a-row>
          <a-row>
            <a-table
              bordered
              columns={this.autoColumns}
              dataSource={this.autoList}
              scopedSlots={{
                opts: () => {
                  return <a-button type="link">查看历史</a-button>
                },
              }}>
              <p slot="expandedRowRender">123</p>
            </a-table>
          </a-row>
        </a-space>
      </a-row>
    );
  }
}
