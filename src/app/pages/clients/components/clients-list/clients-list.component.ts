import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Client } from '../../../../core/store/client/models/client.model';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { GridPayload } from '../../../../shared/models/grid.payload';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsListComponent implements OnInit {
  @Input() clients: Client[] = [];

  @Input() loading = true;

  @Input() count = 100;
  @Input() offset = 0;

  @Output() selectItem = new EventEmitter();
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();

  @Output() reload = new EventEmitter<GridPayload>();

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  gridInfo: GridPayload = { offset: 0, sortProp: 'id', sortDir: 'asc' };

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onActive({ type, row, column }) {
    if (type === 'click' && column.prop) {
      this.selectItem.emit(row);
    }
  }

  onPaginate({ offset }) {
    this.gridInfo.offset = offset;
    this.updateGrid();
  }

  onSort({ sorts }) {
    this.gridInfo = {
      offset: 0,
      sortProp: sorts[0].prop,
      sortDir: sorts[0].dir,
    };
    this.updateGrid();
  }

  updateGrid() {
    this.reload.emit(this.gridInfo);
  }

  onItemDeleted(item) {
    // TODO: need to change the control to the material one
    if (confirm(`Are you sure?`)) {
      this.deleteItem.emit(item);
    }
  }
}
