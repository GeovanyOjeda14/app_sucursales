import { NgModule } from '@angular/core';
import { YoutubePipe } from './youtube/youtube';
import { FilterPipe } from './filter/filter';
import { PipesFechasPipe } from './pipes-fechas/pipes-fechas';
@NgModule({
	declarations: [YoutubePipe,
    FilterPipe,
    PipesFechasPipe],
	imports: [],
	exports: [YoutubePipe,
    FilterPipe,
    PipesFechasPipe]
})
export class PipesModule {}
