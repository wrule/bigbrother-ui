import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './app.module.scss';
import bigbrother from '@/assets/bigbrother.jpg';

@Component
export default class App extends Vue {

  private handleMenuClick(menu: any) {
    const key = menu.key;
    this.$router.push({
      name: key,
    });
  }

  public render(): VNode {
    return (
      <a-layout class={style.layout}>
        <a-layout-header class={style.header}>
          <span class={style.title}>
            <span>
              <span class={style.first_name}>Big</span>
              <span class={style.last_name}>Brother</span>
            </span>
            <img class={style.bigbrother} src={bigbrother} />
          </span>
          <a-input-search
            size="large"
            class={style.searcher}
            placeholder="输入任意关键字后回车搜索"
          />
        </a-layout-header>
        <a-layout class={style.body}>
          <a-layout-sider class={style.sider}>
            <a-menu
              class={style.menu}
              onClick={this.handleMenuClick}>
              <a-menu-item key="project">项目</a-menu-item>
              <a-menu-item key="agent">探针</a-menu-item>
              <a-menu-item key="token">Token</a-menu-item>
            </a-menu>
          </a-layout-sider>
          <a-layout-content class={style.content}>
            <router-view />
          </a-layout-content>
        </a-layout>
        <a-layout-footer class={style.footer}>
          <span>BigBrother ©2021 Created by Jimao</span>
        </a-layout-footer>
      </a-layout>
    );
  }
}
