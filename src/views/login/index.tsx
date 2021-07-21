import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class ViewLogin extends Vue {
  public render(): VNode {
    return (
      <div class={style.view}>

      </div>
    );
  }
}
