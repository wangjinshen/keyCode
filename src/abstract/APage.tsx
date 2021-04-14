import React from 'react';
import APageModel from './APageModel';

export default abstract class APage<Q, T extends APageModel> extends React.Component<Q, any>{
    protected mode: T
    constructor(props: Q, cxn: any) {
        super(props, cxn)
        this.mode = this.creactModel()
    }
    /**
     * 获取mode
     */
    protected abstract creactModel(): T

}

