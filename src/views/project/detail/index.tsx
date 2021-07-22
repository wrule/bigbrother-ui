import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

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
    return [
      { httpMethod: 'get', httpPath: '/api/xsea/dashboard/trend' },
      { httpMethod: 'post', httpPath: '/api/xsea/plan/goal/listInWorkspace' },
      { httpMethod: 'post', httpPath: '/api/xsea/scene/querySceneDetail' },
    ];
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
                  return <a-button type="link">详情</a-button>
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
