import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';

@Component
export default class XHttpMethod extends Vue {
  @Prop({ default: 'get' })
  private readonly method!: string;

  private get autoMethod() {
    return this.method.toUpperCase();
  }

  private get autoTagsMap() {
    return new Map<string, VNode>([
      ['GET', <a-tag color="#2db7f5">GET</a-tag>],
      ['POST', <a-tag color="#87d068">POST</a-tag>],
      ['PUT', <a-tag color="#8bddaa">PUT</a-tag>],
      ['DELETE', <a-tag color="#e7846b">DELETE</a-tag>],
    ]);
  }

  public render(): VNode {
    return this.autoTagsMap.get(this.autoMethod) as VNode;
  }
}
