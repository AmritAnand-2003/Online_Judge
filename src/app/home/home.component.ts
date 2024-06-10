import { Component, OnInit } from '@angular/core';
import { ProblemService } from '../services/problem.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  problems: any[] = [];
  constructor(private problemService: ProblemService) {}
  ngOnInit(): void {
    this.problemService.getProblems().subscribe(
      (data) => {
        console.log(data)
        this.problems = data;
      },
      (error) => {
        console.error('Error fetching problems', error);
      }
    );
  }
}
