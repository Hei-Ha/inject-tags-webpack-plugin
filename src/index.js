import HtmlWebpackPlugin from 'html-webpack-plugin'

class plugins {
    constructor(operation) {
        this.options = {
            position: 'after',
            ...operation
        }
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('plugins', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tap(
                'afterTemplateExecution', (data) => {
                    if (this.options.position === 'before') {
                        for (let i = 0; i < this.options.tags.length; i++) {
                            data.html = data.html.replace(`${this.options.tags[i].target}`, `${this.options.tags[i].tag}${this.options.tags[i].target}`)
                        }
                    } else {
                        for (let i = 0; i < this.options.tags.length; i++) {
                            data.html = data.html.replace(`${this.options.tags[i].target}`, `${this.options.tags[i].target}${this.options.tags[i].tag}`)
                        }
                    }
                    console.log(data.html)
                }
            )
        })
    }
}

export default plugins