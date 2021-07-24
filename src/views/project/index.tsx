import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as API from '@/api/api';

@Component
export default class ViewProject extends Vue {

  private async getAllProjectInfo() {
    const rsp: any = await API.getAllProjectInfo();
    if (rsp.success) {
      return rsp.data || [];
    }
    return [];
  }

  private projectInfos: any[] = [];

  private get autoProjectInfoTable() {
    return this.getTable(this.projectInfos, 3);
  }

  private getTable(list: any[], rowSize: number) {
    const innerList = list.slice(0);
    const result: any[][] = [];
    while(innerList.length > 0) {
      result.push(innerList.splice(0, rowSize));
    }
    return result;
  }

  private async updateAllProjectInfo() {
    this.projectInfos = await this.getAllProjectInfo();
  }

  public mounted() {
    this.updateAllProjectInfo();
  }

  public render(): VNode {
    return (
      <div class={style.com}>
        {this.autoProjectInfoTable.map((projectInfos) => <a-row gutter={16}>
          {
            projectInfos.map((info) => <a-col span={8}>
              {
                info && <a-card
                  class={style.card}
                  title={info.prjName}>
                  <p class={style.infos}>
                    <a-statistic
                      title="接口总数"
                      value={info.apiNum}
                    />
                    <a-statistic
                      title="记录总数"
                      value={info.apiHistoryNum}
                    />
                  </p>
                </a-card>
              }
            </a-col>)
          }
        </a-row>)}
      </div>
    );
  }
}
