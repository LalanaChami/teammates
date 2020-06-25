import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicModule } from 'ng-dynamic-component';
import { ContributionQuestionStatisticsModule,
} from '../question-types/question-statistics/contribution-question-statistics/contribution-question-statistics.module';
import { ContributionRatingsListComponent,
} from '../question-types/question-statistics/contribution-question-statistics/contribution-ratings-list.component';
import { ContributionComponent,
} from '../question-types/question-statistics/contribution-question-statistics/contribution.component';
import { SortableTableComponent } from './sortable-table.component';

/**
 * Module for displaying data in a sortable table
 */
@NgModule({
  declarations: [SortableTableComponent],
  imports: [
    CommonModule,
    NgbModule,
    ContributionQuestionStatisticsModule,
    DynamicModule.withComponents([ContributionComponent, ContributionRatingsListComponent]),
  ],
  exports: [
    SortableTableComponent,
  ],
})
export class SortableTableModule { }
