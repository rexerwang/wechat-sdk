/**
 * Copyright (c) 2020 rexerwang
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import Vue from 'vue'
import { SDKManager } from './core/wechat'

// Create instance
const wechat = new SDKManager()

// Inject Vue
Vue.prototype.$wechat = wechat

export default function(ctx, inject) {
  if (ctx.isServer) return

  SDKManager.isWechat || console.warn('当前为非微信环境')

  const { vconsole, ...options } = <%= JSON.stringify(options) %>

  // Set options
  SDKManager.options = options

  // Enable VConsole
  vconsole && SDKManager.enableVConsole()

  // Inject to the context as $wechat
  ctx.$wechat = wechat
  inject('wechat', wechat)
}
