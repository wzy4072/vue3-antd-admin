// create-api.ts
import {App, createVNode, render, ref, mergeProps , ComponentOptions} from 'vue'
import  DescDetailModal , { DescProps }from './desc-detail.vue'


interface Options {
    title: string;
    itemList: any[];   
    descProps?: DescProps;
    [key: string]: any;
}

/**
 * 创建模态框
 * @param modalOptions
 * @param formOptions
 */
export const descDetailModal = (options: Options): any => {
    // 组件实例
    let _instance = null
    const container = document.createElement('div')
    // 移除组件
    const remove = () => {
        render(null, container)
        _instance = null
        container.remove()
    }
    const formModal = createVNode(DescDetailModal, {...options,remove})
    render(formModal, container)
    return _instance
}
