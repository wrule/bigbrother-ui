import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator';
import { VNode } from 'vue';
import style from './index.module.scss';
import * as Monaco from 'monaco-editor';

@Component
export default class XCodeEditor extends Vue {
  /**
   * 内容（双向绑定）
   */
  @Prop({ default: '' })
  private readonly value!: string;
  /**
   * 当前语法支持
   */
  @Prop({ default: '' })
  private readonly lang!: string;
  /**
   * 是否只读
   */
  @Prop({ default: false })
  private readonly readonly!: boolean;

  private code = '';

  public editor!: Monaco.editor.IStandaloneCodeEditor;

  @Watch('value', { immediate: true })
  private handleValueChange(nv: string) {
    if (nv !== this.code) {
      this.code = nv;
      this.editor?.getModel()?.setValue(this.code);
    }
  }

  @Emit('input')
  private emitInput(nv: string) {
    return nv;
  }

  @Emit('change')
  private emitChange(nv: string) {
    return nv;
  }

  /**
   * 初始化编辑器组件
   */
  private initEditor() {
    this.editor = Monaco.editor.create(this.$el as any, {
      language: this.lang,
      value: this.code,
      fontSize: 14,
      tabSize: 2,
      readOnly: this.readonly,
      automaticLayout: true,
    });
    this.editor.getModel()?.onDidChangeContent((e) => {
      this.code = this.editor.getValue();
      this.emitInput(this.code);
      this.emitChange(this.code);
    });
  }

  private mounted() {
    this.initEditor();
  }

  public render(): VNode {
    return (
      <div
        class={style.com}>
      </div>
    );
  }
}
