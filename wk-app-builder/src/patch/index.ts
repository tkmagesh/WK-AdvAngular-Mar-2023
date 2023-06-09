/* import { createBuilder } from '@angular-devkit/architect'

export default createBuilder((options, ctx) => {
    ctx.logger.info('patch build operation started')
    return { success : true} 
}) */


import { BuilderContext, createBuilder } from "@angular-devkit/architect";
import { getSystemPath, JsonObject, normalize } from '@angular-devkit/core';
import { readFileSync, writeFileSync } from "fs";

interface BuildInfoOptions extends JsonObject {
  file2patch: string;
  target2run?: string;
}

export default createBuilder(
  async ({ file2patch, target2run }: BuildInfoOptions, ctx : BuilderContext) => {
  // builder logic
  ctx.logger.info('Patching has been started...');
  try {
    const fileToPatch = `${getSystemPath(normalize(ctx.workspaceRoot))}/${file2patch}`;
    const packageJsonContent = readFileSync(`${getSystemPath(normalize(ctx.workspaceRoot))}/package.json`, "utf8");
    writeFileSync(fileToPatch, JSON.stringify({
      version: JSON.parse(packageJsonContent).version,
      date: new Date().toString()
    }, undefined, 2));

    ctx.logger.info('Patching has been completed...');

    if (!target2run) {
      return {
        success: true
      }
    }

    const build = await ctx.scheduleTarget({
      target: target2run,
      project: ctx.target.project,
      configuration: ctx.target.configuration
    });
    const { success } = await build.result;

    return { success }

  } catch (error) {
    return {
      success: false
    }
  }
  return {
    success: true
  }
});
