import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'komic-input',
  templateUrl: './komic-input.component.html',
  styleUrls: ['./komic-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KomicInputComponent),
      multi: true
    }
  ]
})
export class KomicInputComponent implements OnInit,  ControlValueAccessor {
  @Input() type!: string;
  @Input() icon!: string;
  @Input() placeholder: string = '';
  @Input() isInvalid!: boolean;

  private onChange = (event: any) => {};
  private onTouched = () => {};
  private disabled!: boolean
  value: string = '';

  ngOnInit(): void {
   console.log(this.placeholder);

  }

  writeValue(value: string): void {
    console.log(value);

    this.value = value ? value : '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputBlur(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    this.onChange(this.value);
    this.onTouched();
  }

}
