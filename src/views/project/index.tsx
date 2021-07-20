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
            <a-card title="XSea">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col span={8}>
            <a-card title="XOcean">
              <p>card content</p>
            </a-card>
          </a-col>
          <a-col span={8}>
            <a-card title="XSpider">
              <p>card content</p>
            </a-card>
          </a-col>
        </a-row>
      </div>
    );
  }
}
