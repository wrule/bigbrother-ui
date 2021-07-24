import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class ViewProject extends Vue {
  public render(): VNode {
    return (
      <div class={style.com}>
        <a-row gutter={16}>
          <a-col span={8}>
            <a-card
              class={style.card}
              title="xsea">
              <p class={style.infos}>
                <a-statistic
                  title="接口总数"
                  value={11111}
                />
                <a-statistic
                  title="记录总数"
                  value={28282}
                />
              </p>
            </a-card>
          </a-col>
          <a-col span={8}>
            <a-card
              class={style.card}
              title="xsea">
              <p class={style.infos}>
                <a-statistic
                  title="接口总数"
                  value={11111}
                />
                <a-statistic
                  title="记录总数"
                  value={28282}
                />
              </p>
            </a-card>
          </a-col>
          <a-col span={8}>
            <a-card
              class={style.card}
              title="xsea">
              <p class={style.infos}>
                <a-statistic
                  title="接口总数"
                  value={11111}
                />
                <a-statistic
                  title="记录总数"
                  value={28282}
                />
              </p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    );
  }
}
