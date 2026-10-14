export type ProjectTrack = 'principal' | 'tanasuq';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'tourism' | 'waterfront' | 'campus' | 'leisure';
  categoryLabel: string;
  client: string;
  role: string;
  location: string;
  areaOrScope: string;
  summary: string;
  keyOutcomes: string[];
  images: string[];
  primaryImage: string;
  fullDescription: string[];
  projectTrack?: ProjectTrack;
  year?: string;
  attributionNote?: string;
}

export type CategoryFilter = 'all' | 'tourism' | 'waterfront' | 'campus' | 'leisure';

export interface QualificationItem {
  period: string;
  role: string;
  institution: string;
  details: string;
}

