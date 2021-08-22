const HtmlWebpackPlugin = require('html-webpack-plugin')
const cheerio = require('cheerio')

class plugins {
    constructor(operation) {
        this.options = {
            position: 'after',
            ...operation
        }
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('plugins', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tap(
                'afterTemplateExecution', (data) => {
                    const $ = cheerio.load(data.html)
                    if (this.options.position === 'begin') {
                        for (let i = 0; i < this.options.tags.length; i++) {
                            $(`${this.options.tags[i].tag}`).prependTo(`${this.options.tags[i].target}`)
                            data.html = $.html()
                        }
                    } else {
                        for (let i = 0; i < this.options.tags.length; i++) {
                            $(`${this.options.tags[i].tag}`).appendTo(`${this.options.tags[i].target}`)
                            data.html = $.html()
                        }
                    }
                }
            )
        })
    }
}

module.exports = plugins