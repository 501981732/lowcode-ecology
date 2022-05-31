import { createFormItemSchema } from '../utils/formilyFieldShared';
import { uuid } from '../../src/shared';

// 直接从designable copy过来，如果有setter不支持那就自己加
export const propsSchema = {
  type: 'object',
  properties: {
    defaultLanguage: {
      title: '语言',
      type: 'string',
      value: 'mysql',
      enum: ['text', 'json', 'javascript', 'mysql'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: 'text',
    },
    defaultValue: {
      title: '默认值',
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    height: {
      type: 'string',
      title: '高度',
      'x-decorator': 'FormItem',
      'x-component': 'Input',
      default: '160px',
    },
    readOnly: {
      title: '只读',
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
      default: false,
    },
    theme: {
      title: '主题色',
      type: 'string',
      enum: ['vs-dark', 'light'],
      'x-decorator': 'FormItem',
      'x-component': 'Select',
      default: 'light',
    },
  },
};

export default createFormItemSchema(propsSchema, {
  field: () => ({
    name: uuid(),
    title: 'MonacoInput',
  }),
});