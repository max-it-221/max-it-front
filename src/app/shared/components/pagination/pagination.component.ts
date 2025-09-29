import { CommonModule } from '@angular/common';
import { Component, computed, EventEmitter, Input, OnInit, Output, signal, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from 'app/core/auth/auth.service';

export interface IPagination {
    length: number;
    pageIndex: number;
    pageSize: number;
    previousPageIndex: number;
}

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
    ],
})
export class PaginationComponent {
   @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 10;
  @Input() maxVisiblePages: number = 5;
  @Input() colorCurentPage: string = 'blue';
  
  private _currentPage = signal(1);
  
  @Input() 
  set currentPage(value: number) {
    this._currentPage.set(value);
  }
  
  get currentPage() {
    return this._currentPage();
  }

  @Output() pageChange = new EventEmitter<number>();

  // Computed values
  totalPages = computed(() => Math.ceil(this.totalItems / this.itemsPerPage));
  
  startItem = computed(() => (this.currentPage - 1) * this.itemsPerPage + 1);
  
  endItem = computed(() => {
    const end = this.currentPage * this.itemsPerPage;
    return end > this.totalItems ? this.totalItems : end;
  });

  visiblePages = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage;
    const maxVisible = this.maxVisiblePages;
    
    if (total <= maxVisible) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const half = Math.floor(maxVisible / 2);
    let start = current - half;
    let end = current + half;

    if (start < 1) {
      start = 1;
      end = maxVisible;
    }

    if (end > total) {
      end = total;
      start = total - maxVisible + 1;
    }

    // Adjust for edge cases with ellipsis
    if (start > 2) start = Math.max(start, 3);
    if (end < total - 1) end = Math.min(end, total - 2);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  });

  shouldShowFirst = computed(() => {
    const visible = this.visiblePages();
    return visible.length > 0 && visible[0] > 1;
  });

  shouldShowLast = computed(() => {
    const visible = this.visiblePages();
    const total = this.totalPages();
    return visible.length > 0 && visible[visible.length - 1] < total;
  });

  shouldShowFirstEllipsis = computed(() => {
    const visible = this.visiblePages();
    return visible.length > 0 && visible[0] > 2;
  });

  shouldShowLastEllipsis = computed(() => {
    const visible = this.visiblePages();
    const total = this.totalPages();
    return visible.length > 0 && visible[visible.length - 1] < total - 1;
  });

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages() && page !== this.currentPage) {
      this._currentPage.set(page);
      this.pageChange.emit(page);
    }
  }

  getPageButtonClass(page: number): string {
    const baseClasses = 'relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full ring-1 ring-inset focus:z-20 focus:outline-offset-0 transition-all duration-200';
    
    if (page === this.currentPage) {
      return `${baseClasses} z-10 ${this.colorCurentPage} text-white ring-blue-600 hover:bg-blue-500 `;
    }
    
    return `${baseClasses} text-gray-900 ring-gray-300 hover:bg-gray-50`;
  }
}
