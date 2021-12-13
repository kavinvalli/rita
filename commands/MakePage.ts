import { join } from 'path'
import { args, BaseCommand } from '@adonisjs/core/build/standalone'

export default class MakePage extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'make:page'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Create a new page using a template'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  @args.string({
    description: 'Full file path including file name excluding `.tsx`. Example: `auth/login`',
    name: 'File',
  })
  public filePath: string

  public async run() {
    const filePathArray = this.filePath.split('/')
    const filename =
      filePathArray.length > 1 ? filePathArray[filePathArray.length - 1] : this.filePath
    const remainingPath = filePathArray.length > 1 ? filePathArray.slice(0, -1).join('/') : ''

    this.logger.info(filename)
    this.logger.info(remainingPath)
    this.logger.info('' + filePathArray.length)

    this.generator
      .addFile(filename, {
        extname: '.tsx',
      })
      .appRoot(this.application.appRoot)
      .destinationDir('resources/js/pages/' + remainingPath)
      .stub(join(__dirname, './templates/page.txt'))
      .apply({
        filename: filename.split('')[0].toUpperCase() + filename.split('').slice(1).join(''),
        numberOfSlashes: filePathArray.length,
      })
    await this.generator.run()
  }
}
