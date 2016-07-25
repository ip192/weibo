import React, { PropTypes,Component } from 'react';
import  './index.css';

export default class Index extends Component {

    onCancel() {
        if (typeof this.props.onCancel === 'function') {
            this.props.onCancel();
        }
    }
    onConfirm() {
        if (typeof this.props.onConfirm === 'function') {
            this.props.onConfirm();
        }
    }
    render() {

        var header = null;
        if (this.props.title) {
            header = (
                <div className={'coo-dialog-header'}>{this.props.title}</div>
            );
        }

        var footer = null;
        if (this.props.isConfirm && this.props.isCancel) {
            footer = (
                <div className={'coo-dialog-footer'}>
                    <a href="javascript:;" className={'coo-btn-dialog-cancel'} onClick={this.onCancel}>取消</a>
                    <a href="javascript:;" className={'coo-btn-dialog-confirm'} onClick={this.onConfirm}>确定</a>
                </div>
            );
        } else if (this.props.isConfirm) {
            footer = (
                <div className={'coo-dialog-footer'}>
                    <a href="javascript:;" className={'coo-btn-dialog-confirm'} onClick={this.onConfirm}>确定</a>
                </div>
            );
        } else if (this.props.isCancel) {
            footer = (
                <div className={'coo-dialog-footer'}>
                    <a href="javascript:;" className={'coo-btn-dialog-cancel'} onClick={this.onCancel}>取消</a>
                </div>
            );
        }

        return (
            <div>
                <div className={'coo-mask' + ' ' + (this.props.isShow ? '' : 'coo-hidden')}
                     onClick={this.onCancel}>
                </div>
                <div className={'coo-dialog' + ' ' + (this.props.isShow ? 'coo-dialog-show' : '')}>
                    {header}
                    <div className={'coo-dialog-body'}>
                        {this.props.children}
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
}

Index.propTypes = {
    isShow: PropTypes.bool.isRequired,              //显示状态
    title: PropTypes.string,                //标题
    isConfirm: PropTypes.bool.isRequired,   //是否显示确认按钮
    isCancel: PropTypes.bool.isRequired,    //是否显示取消按钮
    onConfirm: PropTypes.func,              //确认事件回调
    onCancel: PropTypes.func                //取消事件回调
};
