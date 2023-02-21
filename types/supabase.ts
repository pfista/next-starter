export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      links: {
        Row: {
          created_at: string | null
          farcaster_uri: string | null
          fc_avatar_url: string | null
          fc_num_reactions: number
          fc_num_recasts: number
          fc_num_replies: number
          fc_num_watches: number | null
          fc_username: string | null
          id: number
          og_description: string | null
          og_domain: string | null
          og_image: string | null
          og_title: string | null
          og_url: string | null
          timestamp: number | null
          view_count: number
        }
        Insert: {
          created_at?: string | null
          farcaster_uri?: string | null
          fc_avatar_url?: string | null
          fc_num_reactions?: number
          fc_num_recasts?: number
          fc_num_replies?: number
          fc_num_watches?: number | null
          fc_username?: string | null
          id?: number
          og_description?: string | null
          og_domain?: string | null
          og_image?: string | null
          og_title?: string | null
          og_url?: string | null
          timestamp?: number | null
          view_count?: number
        }
        Update: {
          created_at?: string | null
          farcaster_uri?: string | null
          fc_avatar_url?: string | null
          fc_num_reactions?: number
          fc_num_recasts?: number
          fc_num_replies?: number
          fc_num_watches?: number | null
          fc_username?: string | null
          id?: number
          og_description?: string | null
          og_domain?: string | null
          og_image?: string | null
          og_title?: string | null
          og_url?: string | null
          timestamp?: number | null
          view_count?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment: {
        Args: {
          fc_uri: string
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
