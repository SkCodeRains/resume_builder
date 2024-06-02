import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
    name: 'textTransform',
    standalone: true
})
export class TextTransform implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(value: string): SafeHtml {
        // Your transformation logic goes here
        return this.applyTextTransform(value);
    }

    private applyTextTransform(text: string): SafeHtml {
        // Your logic to interpret and transform the text
        // For example, replacing "\B" with <strong> tags for bold
        let transformedText = text.replace(/\\B(.*?)\\B/g, (match, group) => `<strong>${group.charAt(0).toUpperCase()}${group.slice(1)}</strong>`);
        transformedText = transformedText.replace(/\\P(.*?)\\P/g, (match, group) => `<span class="formatted-text">${group.charAt(0).toUpperCase()}${group.slice(1)}</span>`);

        return this.sanitizer.bypassSecurityTrustHtml(transformedText);
    }
}
