import { Pipe } from "@angular/core";

@Pipe({
   name: 'replace'
})
export class ReplacePipe
{
   public transform(where: string, what: string, by: string): string
   {
      return where.replace(what, by);
   }
}