import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Client } from '@core/store/client/models/client.model';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public client: Client) {
  }

  ngOnInit() {
  }
}
